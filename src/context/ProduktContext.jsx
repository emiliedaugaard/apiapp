import React, {createContext, useState} from 'react'

export const ProduktContext = createContext()

const ProduktContextProvider = (props) => {

    const [produkter, setProdukter] = useState([
        { produktid: 23, 
            produkttitel: "Fusilli L'italiana",
            produktinfo: "400 g / Pasta Zara",
            produktpris: 3.80,
            produktbeskrivelse:"Fusilli L´italiana stammer fra Italien hvor familien Bragagnolo har lavet pasta i mere end et århundrede. Det startede som en lille familievirksomhed, der med tiden voksede sig kæmpe store. Det er stadig et voksende firma og som i dag resultere i Pasta når det er bedst. I løbet af disse år har Pasta ZARA's produktion opretholdt sine principper uændret: et omhyggeligt udvalg af den bedste hård hvede semolina og kun den nyeste teknologi, der anvendes til pastafremstillingsprocessen. Et koncept, der fandt den rette balance mellem tradition og innovation. Dette er hvad der gør forskellen."
        },
        { produktid: 12,
            produkttitel: "Kiks m. kakaocreme",
            produktinfo: "2 pk / 268 g / Hit",
            produktpris: 17.95,
            produktbeskrivelse: "Ingrediensliste: HVEDEMEL, sukker, vegetabilsk fedtstof (palme, kokos), fedtfattigt kakaopulver 3,4 %, glucose-sirup og frugtsukker-sirup, valleprodukt (MÆLK), hævemidler (ammoniumcarbonat, natriumcarbonat), salt, surhedsregulerende middel (citronsyre), SKUMMETMÆLKSPULVER, kakaopulver, emulgator (lecithiner), aroma, ÆGGEPULVER.Kan indeholde spor af HASSELNØDDER."
        },
        { produktid: 56,
            produkttitel: "Luksusrogn",
            produktinfo: "2 x 200 g / Amanda",
            produktpris: 32.95,
            produktbeskrivelse: "Ingrediensliste: Min. 76% rogn, vand, tomatpasta, vegetabilsk olie, salt, carrageenan, johannesbrødkernemel. "
        },
        { produktid: 9,
            produkttitel: "Kaffe bl. 95 øko.",
            produktinfo: "400 g / fairtrade/ malet kaffe / Peter Larsen Kaffe",
            produktpris: 55.95,
            produktbeskrivelse: "Fairtrade kaffe. Økologisk blanding med en blød og let syrlig smag, med en fyldig aroma. Kaffen er dyrket i det Syd- og mellemamerikanske højland. Fairtrade betyder mere fair handelsvilkår og flere muligheder for, at producenter i udviklingslande kan investere i deres produktion, og i deres lokalsamfund for at skabe en bæredygtig fremtid. "
        }
    ])

    const addProdukter = (produkttitel, produktinfo, produktpris, produktbeskrivelse) => {
        let id = Math.floor(Math.random() * 100)
        setProdukter([...produkter, {produktid:id, produkttitel, produktinfo, produktpris, produktbeskrivelse}])
    }

    const sletProdukt = (ID) => {
        setProdukter(produkter.filter(p => p.produktid !== ID))
    }

    const findProdukt = (ID) => {
        return produkter.find(p => p.produktid ===ID)
    }
    return (
        <ProduktContext.Provider value={{produkter, addProdukter, findProdukt, sletProdukt}}>
            {props.children}
        </ProduktContext.Provider>
    )
}

export default ProduktContextProvider
