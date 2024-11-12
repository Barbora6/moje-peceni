const recepiesCookies = [
    {
        id:13,
        image: 'image13.jpg',
        title: 'Lískooříšková kolečka s nutellou',
        description: '<p>Obě mouky, cukr a ořechy promíchejte ve větší míse. Přidejte na kousky pokrájené máslo a jemně nastrouhanou pomerančovou kůru. Promíchejte nožem, poté prsty vypracujte drobenku a hmotu spojte v kompaktní těsto. Pracujte rychle, těsto bude mít tendenci měknout. Zabalte ho do fólie a uložte přes noc do ledničky.</p><p>Na lehce pomoučněné pracovní ploše vyválejte těsto na plát silný asi 5 mm. Vykrajujte tvary, polovině z nich vykrojte i středy, skládejte je na plech vyložený pečicím papírem a pečte v troubě předehřáté na 170 °C, asi 15 minut. Nechte zcela vychladnout, slepujte nutellou, skládejte do krabice a uložte do chladu.</p>',
        // rawMaterials: na 2 plechy, 200 g hladká mouka + na pomoučnění, 100 g špaldová mouka jemně mletá, 80 g moučkový cukr, 120 g oříšky lískové, jemně mleté, 240 g máslo studené, pomerančová kůra z 1 pomeranče, nutela na promazání,
        difficulty: 'snadné',
        time: 20,
    },

    {
        id:14,
        image: 'image14.jpg',
        title: 'Křehké sněhové vločky',
        description: '<p>Mouku prosejte na vál, přidejte moučkový cukr a promíchejte. Do mouky udělejte důlek, rozklepněte do něj vejce a přidejte na menší kousky nakrájené máslo. Citron důkladně omyjte a kůru ostrouhejte na jemném struhadle. Přidejte pár kapek vanilkové esence. Všechny suroviny na válu pak rukama rychle, ale důkladně prohněťte. Z hotového těsta udělejte hroudu, zabalte ji do fólie a uložte ji alespoň na hodinu, nejlépe však do druhého dne, do chladničky.</p><p>Odleželé linecké těsto rozválejte na tenký plát a vykrajujte z něj hvězdičky. Dejte je na plech vyložený pečicím papírem a pečte asi 10 minut – dle velikosti. Po upečení nechte krátce vychladnout na plechu a přemístěte je na vál.</p><p>Na polevu utřete v míse všechny přísady do zhoustnutí, polijte jí zcela vychladlé cukroví a každý kousek ozdobte cukrovými perličkami nebo krystaly cukru dle fantazie.</p>',
        // rawMaterials: 500 g hladká mouka + na podsypání, 250 g máslo, 100 g moučkový cukr, 1 ks vejce, citronová kůra z 1 citronu, 1 špetka soli, vanilková esence, Na polevu: 2 ks bílek, 4 lžíce citronová šťáva nebo 4 lžíce rumu, 500 g moučkový cukr, cukrářské zdobení nebo krystalový cukr,
        difficulty: 'snadné',
        time: 40,
    },

    {
        id:15,
        image: 'image15.jpg',
        title: 'Kokosové vločky',
        description: '<p>Ve větší míse smíchejte mouku s cukrem a kokosem. Přidejte na kousky pokrájené máslo, žloutky a citronovou kůru. Promíchejte nožem, prsty zpracujte na drobenku a poté spojte v hladké těsto. Pracujte rychle a těsto zbytečně nehněťte. Zabalte ho do fólie a nechte odležet v ledničce do druhého dne.</p><p>Těsto rozválejte na mírně pomoučněné pracovní ploše na placku silnou asi 5 mm. Vykrajujte tvary a skládejte je na plech vyložený pečicím papírem. Cukroví pečte v troubě předehřáté na 170 °C, asi 15 minut. Počkejte, až zcela vychladnou, poté namáčejte v rozpuštěné čokoládě, skládejte na mřížku, nechte lehce zaschnout, posypte kokosem a nechte zcela ztuhnout. Naskládejte do uzavíratelné krabice a skladujte v chladu.</p>',
        // rawMaterials: na 2 plechy, 250 g hladká mouka + na pomoučnění, 90 g moučkový cukr, 1 lžíce kokos + na posypání, 140 g máslo studené, 2 ks žloutek, citronová kůra z 1 chemicky neošetrřeného citronu, čokoláda na namáčení,
        difficulty: 'snadné',
        time: 30,
    },

    {
        id:16,
        image: 'image16.jpg',
        title: 'Vosí hnízda',
        description: '<p>Z uvedených přísad vypracujeme hladké těsto. Z těsta ukrajujeme malé kousky, které vpěchujeme do formiček úlků vysypaných cukrem.</p><p>Do vpěchovaného těsta uděláme vždy koncem vařečky důlek, který vyplníme máslovou náplní. Přiklopíme piškotem a vyklepneme z formičky.</p><p>Dáme ztuhnout do ledničky.</p><p>Náplň: máslo, cukr a žloutky utřeme v hladký krém. Můžeme dochutit rumem.</p>',
        // rawMaterials: Těsto: 120 g máslo, 3 lžíce mléko, 120 g moučkový cukr, 6 lžíce hnědý rum, 300 g dětské piškoty drcené, 2 lžíce kakao, Náplň: 120 g máslo, 120 g moučkový cukr + na vysypání formiček, 2 žloutek, hnědý rum, dětské piškoty na přiklopení, 
        difficulty: 'snadné',
        time: 60,
    },

    {
        id:17,
        image: 'image17.jpg',
        title: 'Základní linecké těsto',
        description: '<p>Mouku prosejte na vál, přidejte moučkový cukr a promíchejte. Do mouky udělejte důlek, rozklepněte do něj vejce a přidejte na menší kousky nakrájené máslo. Citron důkladně omyjte a kůru ostrouhejte na jemném struhadle. Všechny suroviny na válu pak rukama rychle, ale důkladně prohněťte.</p><p>Z hotového těsta udělejte hroudu, zabalte ji do fólie a uložte ji alespoň na hodinu, nejlépe však do druhého dne, do chladničky.</p><p>Vychlazené těsto rozválejte na pomoučeném válu na plát silný asi 3 milimetry. Z plátu vykrajujte různé tvary. Ty přeložte na plech vyložený pečicím papírem a v troubě vyhřáté na 180 °C pečte asi 5 až 10 minut. Ještě teplé je obalte v moučkovém cukru.</p>',
        // rawMaterials: 500 g hladká mouka + na podsypání, 250 g máslo, 100 g moučkový cukr, 1 ks vejce, citronová kůra z 1 citrónu, 1 špetka soli, 
        difficulty: 'snadné',
        time: 20,
    },

    {
        id:18,
        image: 'image18.jpg',
        title: 'Křupavé mandlové sušenky',
        description: '<p>Do mísy robotu dejte bílek se špetkou soli a našlehejte ho do polotuha. Přisypte moučkový cukr a ušlehejte lesklou, pevnou hmotu. Vmíchejte mleté mandle, citronovou kůru a už jen lžící promíchejte.</p><p>Do menší misky nasypte krystalový cukr. Mokrýma rukama tvořte kuličky velké asi jako vlašský ořech, obalte je v krystalu a skládejte na plech vyložený pečicím papírem. Na každou kuličku položte mandli a přimáčkněte ji, kuličky se trochu zploští a některé popraskají, což není na škodu. Připravené sušenky nechte na plechu alespoň 12 hodin schnout při pokojové teplotě.</p><p>Sušenky pečte v troubě předehřáté na 180 °C, asi 10 minut. Měly by lehce zrůžovět. Nechte je vychladnout a skladujte v uzavíratelné krabici.</p>',
        // rawMaterials: na 1 plech, 1 ks bílek, 1 špetka soli, 140 g moučkový cukr, 170 g mleté mandle, citronová kůra z 1 citronu, cukr krystal na obalení, mandle na zdobení,
        difficulty: 'snadné',
        time: 30,
    },
]

export default recepiesCookies