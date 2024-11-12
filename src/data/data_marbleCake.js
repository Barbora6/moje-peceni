
const recepiesMarbleCake = [
    {
        id:1,
        image: 'image1.jpg',
        title: 'Citronovo-pomerančová bábovka',
        description: '<p>Ve velké míse smíchejte mouku, prášek do pečiva, sůl, cukr a lístky z tymiánu. V misce prošlehejte vejce s olejem, mlékem a citrusovou kůrou. Tekutou směs vmíchejte do sypké, postačí vařečkou.</p><p>Bábovkovou formu důkladně vymažte máslem a vysypte moukou. Do formy nalijte těsto a bábovku dejte péct do trouby předehřáté na 180 °C, asi 45 minut. Doba pečení závisí na velikosti formy a na jejím materiálu jinak se peče v silikonu, jinak v litině. Propečení vyzkoušejte pomocí špejle.</p><p>Hotovou bábovku ještě zatepla vyklopte z formy. Pokud to nepůjde samo, přehoďte přes horkou formu mokrou utěrku. Bábovku nechte vychladnout. Mezitím umíchejte polevu. Cukr prosejte přes jemné sítko do mísy, promíchejte ho s horkou vodou a šťávou z citrusů. Podle potřeby přidejte tekutiny, poleva by měla být hustá, ale stále tekutá. Bábovku dejte na servírovací podnos, zalijte polevou, ozdobte kandovaným ovocem</p>',
        // rawMaterials:400 g polohrubá mouka, 1 balíček prášek do pečiva, 1 špetka soli, 200 g třtinový cukr, 3 snítka citronový tymián + na dokončení, 2 ks vejce, 125 ml slunečnicový olej, 200 ml mléko, citronová kůra z 1 citronu, pomerančová kůra z 1 pomeranče, máslo na vymazání formy, hrubá mouka na vysypání formy, kandované ovoce na dokončení,
        // topping: 150 g moučkový cukr, 1 lžíce horká voda 1 - 2 lžíce, 1 lžíce citronová šťáva, 1 lžíce pomerančová šťáva,
        difficulty: 'snadné',
        time: 30,
    },
    {
        id:2,
        image: 'image2.jpg',
        title: 'Hrnečková pomerančová bábovka',
        description: '<p>Předehřejte troubu na 170 ° C. Připravte si máslem vymazanou a moukou vysypanou formu. Ve střední misce smíchejte mouku, prášek do pečiva a sůl. V jiné misce smíchejte olej a cukr. Postupně přidávejte vejce, jedno po druhém, dokud nejsou důkladně smíchány.</p><p>Přisypejte polovinu moučné směsi a dolijte polovinu mléka. Promíchejte a opakujte s druhou polovinou mouky a mléka. Přidejte vanilkový extrakt a pomerančovou kůru. Nalijte těsto do připravené formy, a jemně poklepejte o pult, aby se uvolnily případné vzduchové bubliny.</p><p>Pečte 50-60 minut nebo dokud špejle vložená do středu bábovky nevyjde čistá. Před vyklopením, nechte 10 minut odstát.</p><p>Nyní si připravte sirup. V malém hrnci přiveďte pomerančovou šťávu a cukr k varu. Za stálého míchání vařte 2-3 minuty. Poté natřete polevu na povrch bábovky a nechte úplně vychladnout.</p>',
        // rawMaterials:3 hrnek polohrubá mouka, 2 lžička prášek do pečiva, 1 lžička sůl, 1 hrnek rostlinný olej, 2 hrnek cukr, 3 ks vejce, 1 hrnek mléko, 1 lžička vanilkový extrakt, 1 ks pomerančová kůra,
        // topping: 0,50 hrnek pomerančová šťáva, 0,60 hrnek cukr,
        difficulty: 'snadné',
        time: 90,
    },

    {
        id: 3,
        image: 'image3.jpg',
        title: 'Hrnková bábovka s vanilkou',
        description: '<p>Troubu předehřejte na 170 °C. Připravte si máslem vymazanou a moukou vysypanou formu.</p><p>V malé misce smíchejte mouku, jedlou sodu a sůl a odložte stranou. V jiné misce smíchejte cukr, máslo a vejce a společně utřete. Přidejte vanilkový extrakt, moukovou směs a jogurt a promíchejte dohladka.</p><p>Nalijte do připravené formy a jemně poklepejte o pult, aby se uvolnily případné vzduchové bubliny.</p><p>Pečte 35-40 minut či dokud špejle vložená do středu bábovky nevyjde čistá. Vyjměte z trouby a nechte 10 minut vychladnout, poté opatrně vyklopte. Před podáváním posypejte moučkovým cukrem.</p>',
        // rawMarerials: 1,50 hrnek mouka, 0,50 lžička sůl, 0,25 lžička jedlá soda, 0,50 balíček rozpuštěné máslo, 1,50 hrnek cukr, 4 ks vejce, 1 lžička vanilkový extrakt, 0,60 hrnek bílý jogurt, moučkový cukr na poprášení,
        difficulty: 'snadné',
        time: 60,
    },

    {
        id: 4,
        image: 'image4.jpg',
        title: 'Bábovka z vaječného likéru',
        description: '<p>Vše smícháme, nalijeme do formy a upečeme. Těsto se může zdát řidší, ale nevadí, výsledek bude skvělý.</p>',
        // rawMaterials: 125 g hladká mouka, 5 ks vejce, 0,25 l rostlinný olej, 250 g moučkový cukr, 1 ks vanilkový cukr, 125 g polohrubá mouka, 1 ks prášek do pečiva, 0,25 l vaječný koňak,
        difficulty: 'snadné',
        time: 'neuvedeno',
    },
    
    {
        id: 5,
        image: 'image5.jpg',
        title: 'Hrnečková bábovka s bílou čokoládou',
        description: '<p>Předehřejte troubu na 170 ° C. Ve střední misce prosejte spolu mouku, prášek do pečiva a sůl a dejte stranou. V menším kastrůlku rozehřejte máslo, přidejte cukr a vanilku a za stálého míchání povařte asi 2 minuty.</p><p>Poté odstavte a po jednom přidávejte vejce, vždy dobře rozmíchejte. Vlijte do mísy se sypkými surovinami a opět promíchejte dohladka.</p><p>Pak přilijte mléko a znovu dobře zamíchejte. Nakonec přisypejte nasekanou čokoládu a naposledy opatrně promíchejte.</p><p>Nalijte do připravené moukou vysypané formy a pečte 55-60 minut. Vyjměte z trouby a nechte 10 minut odstát. Opatrně vyklopte. Těsně před podáváním posypte moučkovým cukrem a nazdobte čerstvými malinami.</p>',
        // rawMaterials: 2,5 hrnek mouka, 2,5 lžička prášek do pečiva, 0,50 lžička sůl, 1 hrnek rozpuštěné máslo, 1,50 hrnek cukr, 0,50 lžička vanilkový extrakt, 3 ks vejce, 1 hrnek mléko, 0,75 hrnek bílá čokoláda jemně nasekaná,
        difficulty: 'snadné',
        time: 90,
    },
    
    {
        id: 6,
        image: 'image6.jpg',
        title: 'Tvarohovojablečná bábovka',
        description: '<p>V hluboké míse vyšlehejte máslo se žloutky, cukr a citronovou kůru do světlé pěny. Přidejte tvaroh a citronovou šťávu. Do druhé mísy prosejte mouku, přidejte prášek do pečiva a špetku soli. Sypkou směs vmíchejte do tvarohové.</p><p>Z bílků vyšlehejte tuhý lesklý sníh, přidejte vanilkový cukr a zlehka zašlehejte. Poté jej přimíchejte opatrně do těsta. Oloupaná a na kostičky nakrájená jablka pokapaná citronem promíchejte se lžící hrubé mouky. Zlehka vmíchejte do těsta. Těsto vlijte do máslem vymazané a moukou vysypané formy.</p><p>Pečte v předehřáté troubě při 175 °C dozlatova, asi 55–60 minut. Nechte vychladnout ve formě, asi 20 minut, poté vyklopte a zasypte moučkovým cukrem. Milované bábovky mohou být překvapivě svěží díky ovoci a citrusové kůře.</p>',
        // rawMaterials: 160 g máslo, 1 špetka soli, moučkový cukr na zasypání, 1 lžička vanilkový cukr, 200 g hrubá mouka, 500 g měkký tvaroh polotučný, citron šťáva a kůra, 1 ks prášek do pečiva, 4 ks sníh z bílku, 4 ks žloutky, 220 g třtinový cukr,
        difficulty: 'střední',
        time: 90,
    },
]

export default recepiesMarbleCake