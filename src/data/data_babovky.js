import image1 from '../images/image1.jpg'
import image2 from '../images/image2.png'
import image3 from '../images/image3.jpg'
import image4 from '../images/image4.jpg'
import image5 from '../images/image5.jpg'
import image6 from '../images/image6.png'


const recepiesBabovky = [
    {
        id:1,
        image: image1,
        title: 'Citronovo-pomerančová bábovka',
        description1: 'Ve velké míse smíchejte mouku, prášek do pečiva, sůl, cukr a lístky z tymiánu. V misce prošlehejte vejce s olejem, mlékem a citrusovou kůrou. Tekutou směs vmíchejte do sypké, postačí vařečkou.',
        description2: 'Bábovkovou formu důkladně vymažte máslem a vysypte moukou. Do formy nalijte těsto a bábovku dejte péct do trouby předehřáté na 180 °C, asi 45 minut. Doba pečení závisí na velikosti formy a na jejím materiálu – jinak se peče v silikonu, jinak v litině. Propečení vyzkoušejte pomocí špejle.',
        description3: 'Hotovou bábovku ještě zatepla vyklopte z formy. Pokud to nepůjde samo, přehoďte přes horkou formu mokrou utěrku. Bábovku nechte vychladnout. Mezitím umíchejte polevu. Cukr prosejte přes jemné sítko do mísy, promíchejte ho s horkou vodou a šťávou z citrusů. Podle potřeby přidejte tekutiny, poleva by měla být hustá, ale stále tekutá. Bábovku dejte na servírovací podnos, zalijte polevou, ozdobte kandovaným ovocem',
        difficulty: 'snadné',
        time: 30,
    },
    {
        id:2,
        image: image2,
        title: 'Hrnečková pomerančová bábovka',
        description1: 'Předehřejte troubu na 170 ° C. Připravte si máslem vymazanou a moukou vysypanou formu. Ve střední misce smíchejte mouku, prášek do pečiva a sůl. V jiné misce smíchejte olej a cukr. Postupně přidávejte vejce, jedno po druhém, dokud nejsou důkladně smíchány.',
        description2: '2. Přisypejte polovinu moučné směsi a dolijte polovinu mléka. Promíchejte a opakujte s druhou polovinou mouky a mléka. Přidejte vanilkový extrakt a pomerančovou kůru. Nalijte těsto do připravené formy, a jemně poklepejte o pult, aby se uvolnily případné vzduchové bubliny.',
        description3: 'Pečte 50-60 minut nebo dokud špejle vložená do středu bábovky nevyjde čistá. Před vyklopením, nechte 10 minut odstát.',
        // description4: 'Nyní si připravte sirup. V malém hrnci přiveďte pomerančovou šťávu a cukr k varu. Za stálého míchání vařte 2-3 minuty. Poté natřete polevu na povrch bábovky a nechte úplně vychladnout.',
        // difficulty: 'snadné',
        time: 90,
    },

    {
        id: 3,
        image: image3,
        title: 'Hrnková bábovka s vanilkou',
        description1: 'Troubu předehřejte na 170 °C. Připravte si máslem vymazanou a moukou vysypanou formu.',
        description2: 'V malé misce smíchejte mouku, jedlou sodu a sůl a odložte stranou. V jiné misce smíchejte cukr, máslo a vejce a společně utřete. Přidejte vanilkový extrakt, moukovou směs a jogurt a promíchejte dohladka.',
        description3: 'Nalijte do připravené formy a jemně poklepejte o pult, aby se uvolnily případné vzduchové bubliny.',
        // description4: 'Pečte 35-40 minut či dokud špejle vložená do středu bábovky nevyjde čistá. Vyjměte z trouby a nechte 10 minut vychladnout, poté opatrně vyklopte. Před podáváním posypejte moučkovým cukrem.',
        difficulty: 'snadné',
        time: 60,
    },

    {
        id: 4,
        image: image4,
        title: 'Bábovka z vaječného likéru',
        description1: 'Vše smícháme, nalijeme do formy a upečeme. Těsto se může zdát řidší, ale nevadí, výsledek bude skvělý.',
        difficulty: 'snadné',
        time: 'neuvedeno',
    },
    
    {
        id: 5,
        image: image5,
        title: 'Hrnečková bábovka s bílou čokoládou',
        description1: 'Předehřejte troubu na 170 ° C. Ve střední misce prosejte spolu mouku, prášek do pečiva a sůl a dejte stranou. V menším kastrůlku rozehřejte máslo, přidejte cukr a vanilku a za stálého míchání povařte asi 2 minuty.',
        description2: 'Poté odstavte a po jednom přidávejte vejce, vždy dobře rozmíchejte. Vlijte do mísy se sypkými surovinami a opět promíchejte dohladka.',
        description3: 'Pak přilijte mléko a znovu dobře zamíchejte. Nakonec přisypejte nasekanou čokoládu a naposledy opatrně promíchejte.',
        // description4: 'Nalijte do připravené moukou vysypané formy a pečte 55-60 minut. Vyjměte z trouby a nechte 10 minut odstát. Opatrně vyklopte. Těsně před podáváním posypte moučkovým cukrem a nazdobte čerstvými malinami.',
        difficulty: 'snadné',
        time: 90,
    },
    
    {
        id: 6,
        image: image6,
        title: 'Tvarohovojablečná bábovka',
        description1: 'V hluboké míse vyšlehejte máslo se žloutky, cukr a citronovou kůru do světlé pěny. Přidejte tvaroh a citronovou šťávu. Do druhé mísy prosejte mouku, přidejte prášek do pečiva a špetku soli. Sypkou směs vmíchejte do tvarohové.',
        description2: 'Z bílků vyšlehejte tuhý lesklý sníh, přidejte vanilkový cukr a zlehka zašlehejte. Poté jej přimíchejte opatrně do těsta. Oloupaná a na kostičky nakrájená jablka pokapaná citronem promíchejte se lžící hrubé mouky. Zlehka vmíchejte do těsta. Těsto vlijte do máslem vymazané a moukou vysypané formy.',
        description3: 'Pečte v předehřáté troubě při 175 °C dozlatova, asi 55–60 minut. Nechte vychladnout ve formě, asi 20 minut, poté vyklopte a zasypte moučkovým cukrem. Milované bábovky mohou být překvapivě svěží díky ovoci a citrusové kůře.',
        difficulty: 'střední',
        time: 90,
    },
]

export default recepiesBabovky