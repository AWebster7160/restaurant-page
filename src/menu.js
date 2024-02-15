import './styles.css';

export default function menuLoad() {
    const container = document.querySelector('#container');
    container.setAttribute('class', 'menu');
    while (container.lastChild) {
        container.removeChild(container.lastChild);
    }
    container.style.backgroundImage = 'none';
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');
    container.appendChild(menu);
    const menuLeft = document.createElement('div');
    menuLeft.setAttribute('id', 'menu-left');
    menu.appendChild(menuLeft);
    const menuRight = document.createElement('div');
    menuRight.setAttribute('id', 'menu-right');
    menu.appendChild(menuRight);
    const menuRightWrapper = document.createElement('div');
    menuRightWrapper.setAttribute('id', 'right-wrapper');
    menuRight.appendChild(menuRightWrapper);
    const specials = document.createElement('div');
    specials.setAttribute('id', 'specials');
    menuLeft.appendChild(specials);
    const sashimi = document.createElement('div');
    sashimi.setAttribute('id', 'sashimi');
    specials.appendChild(sashimi);
    const rolls = document.createElement('div');
    rolls.setAttribute('id', 'rolls');
    specials.appendChild(rolls);
    const plates = document.createElement('div');
    plates.setAttribute('id', 'plates');
    menuRightWrapper.appendChild(plates);
    const dessert = document.createElement('div') ;
    dessert.setAttribute('id', 'dessert');
    menuRightWrapper.appendChild(dessert);
    // const sashimiPrices = document.createElement('div');
    // sashimiPrices.setAttribute('id', 'sashimi-prices');
    // specials.appendChild(sashimiPrices);
    
    const sashimiHead = document.createElement('h2');
    sashimiHead.setAttribute('class', 'menu-head');
    sashimiHead.setAttribute('id', 'sashimi-head');
    sashimiHead.textContent = 'SIGNATURE SASHIMI';
    specials.appendChild(sashimiHead);
    // const rollsHead = document.createElement('h2');
    // rollsHead.setAttribute('class', 'menu-head');
    // rollsHead.setAttribute('id', 'rolls-head');
    // rollsHead.textContent = 'SIGNATURE ROLLS';
    // specials.appendChild(rollsHead);
    const platesHead = document.createElement('h2');
    platesHead.setAttribute('class', 'menu-head');
    platesHead.setAttribute('id', 'plates-head');
    platesHead.textContent = 'SMALL PLATES';
    menuRightWrapper.appendChild(platesHead);
    const dessertHead = document.createElement('h2');
    dessertHead.setAttribute('class', 'menu-head');
    dessertHead.setAttribute('id', 'dessert-head');
    dessertHead.textContent = 'DESSERT';
    menuRightWrapper.appendChild(dessertHead);

    const hamachi = document.createElement('div');
    hamachi.setAttribute('class', 'menu-item');
    sashimi.appendChild(hamachi);

    const hamachiTitle = document.createElement('div');
    hamachiTitle.setAttribute('class', 'menu-item-title');
    hamachiTitle.setAttribute('id', 'hamachi-title');
    hamachi.appendChild(hamachiTitle);

    const hamachiName = document.createElement('h3');
    hamachiName.setAttribute('class', 'menu-name-light');
    hamachiName.setAttribute('id', 'hamachi-name');
    hamachiName.textContent = 'HAMACHI SIZZLE*'
    hamachiTitle.appendChild(hamachiName);

    const hamachiPrice = document.createElement('h3');
    hamachiPrice.setAttribute('class', 'price');
    hamachiPrice.setAttribute('id', 'hamachi-price');
    hamachiPrice.textContent = '23'
    hamachiTitle.appendChild(hamachiPrice);

    const hamachiInfo = document.createElement('span');
    hamachiInfo.setAttribute('class', 'menu-info-dark');
    hamachiInfo.setAttribute('id', 'hamachi-info');
    hamachiInfo.textContent = 'Hot oil, fresh ginger, garlic, chive, ponzu, aleppo pepper'
    hamachi.appendChild(hamachiInfo);

    const crudo = document.createElement('div');
    crudo.setAttribute('class', 'menu-item');
    sashimi.appendChild(crudo);

    const crudoTitle = document.createElement('div');
    crudoTitle.setAttribute('class', 'menu-item-title');
    crudoTitle.setAttribute('id', 'crudo-title');
    crudo.appendChild(crudoTitle);

    const crudoName = document.createElement('h3');
    crudoName.setAttribute('class', 'menu-name-light');
    crudoName.setAttribute('id', 'crudo-name');
    crudoName.textContent = 'KING SALMON CRUDO*'
    crudoTitle.appendChild(crudoName);

    const crudoPrice = document.createElement('h3');
    crudoPrice.setAttribute('class', 'price');
    crudoPrice.setAttribute('id', 'crudo-price');
    crudoPrice.textContent = '23'
    crudoTitle.appendChild(crudoPrice);

    const crudoInfo = document.createElement('span');
    crudoInfo.setAttribute('class', 'menu-info-dark');
    crudoInfo.setAttribute('id', 'crudo-info');
    crudoInfo.textContent = 'White truffle ponzu, cherry tomato, sea salt'
    crudo.appendChild(crudoInfo);

    const carpaccio = document.createElement('div');
    carpaccio.setAttribute('class', 'menu-item');
    sashimi.appendChild(carpaccio);

    const carpaccioTitle = document.createElement('div');
    carpaccioTitle.setAttribute('class', 'menu-item-title');
    carpaccioTitle.setAttribute('id', 'carpaccio-title');
    carpaccio.appendChild(carpaccioTitle);

    const carpaccioName = document.createElement('h3');
    carpaccioName.setAttribute('class', 'menu-name-light');
    carpaccioName.setAttribute('id', 'carpaccio-name');
    carpaccioName.textContent = 'OCTOPUS CARPACCIO'
    carpaccioTitle.appendChild(carpaccioName);

    const carpaccioPrice = document.createElement('h3');
    carpaccioPrice.setAttribute('class', 'price');
    carpaccioPrice.setAttribute('id', 'carpaccio-price');
    carpaccioPrice.textContent = '22'
    carpaccioTitle.appendChild(carpaccioPrice);

    const carpaccioInfo = document.createElement('span');
    carpaccioInfo.setAttribute('class', 'menu-info-dark');
    carpaccioInfo.setAttribute('id', 'carpaccio-info');
    carpaccioInfo.textContent = 'Lemon vinaigrette, crispy capers, tomato, fresh herbs'
    carpaccio.appendChild(carpaccioInfo);

    const zuke = document.createElement('div');
    zuke.setAttribute('class', 'menu-item');
    sashimi.appendChild(zuke);

    const zukeTitle = document.createElement('div');
    zukeTitle.setAttribute('class', 'menu-item-title');
    zukeTitle.setAttribute('id', 'zuke-title');
    zuke.appendChild(zukeTitle);

    const zukeName = document.createElement('h3');
    zukeName.setAttribute('class', 'menu-name-light');
    zukeName.setAttribute('id', 'zuke-name');
    zukeName.textContent = 'TUNA ZUKE*'
    zukeTitle.appendChild(zukeName);

    const zukePrice = document.createElement('h3');
    zukePrice.setAttribute('class', 'price');
    zukePrice.setAttribute('id', 'zuke-price');
    zukePrice.textContent = '24'
    zukeTitle.appendChild(zukePrice);

    const zukeInfo = document.createElement('span');
    zukeInfo.setAttribute('class', 'menu-info-dark');
    zukeInfo.setAttribute('id', 'zuke-info');
    zukeInfo.textContent = 'Soy marinated bigeye tuna, sesame onion ponzu, fried garlic, chive'
    zuke.appendChild(zukeInfo);

    const kanpachi = document.createElement('div');
    kanpachi.setAttribute('class', 'menu-item');
    sashimi.appendChild(kanpachi);

    const kanpachiTitle = document.createElement('div');
    kanpachiTitle.setAttribute('class', 'menu-item-title');
    kanpachiTitle.setAttribute('id', 'kanpachi-title');
    kanpachi.appendChild(kanpachiTitle);

    const kanpachiName = document.createElement('h3');
    kanpachiName.setAttribute('class', 'menu-name-light');
    kanpachiName.setAttribute('id', 'kanpachi-name');
    kanpachiName.textContent = 'KANPACHI AGUACHILE*'
    kanpachiTitle.appendChild(kanpachiName);

    const kanpachiPrice = document.createElement('h3');
    kanpachiPrice.setAttribute('class', 'price');
    kanpachiPrice.setAttribute('id', 'kanpachi-price');
    kanpachiPrice.textContent = '23'
    kanpachiTitle.appendChild(kanpachiPrice);

    const kanpachiInfo = document.createElement('span');
    kanpachiInfo.setAttribute('class', 'menu-info-dark');
    kanpachiInfo.setAttribute('id', 'kanpachi-info');
    kanpachiInfo.textContent = 'Cucumber-cilantro aguachile, pomegranate, serrano, charred orange, olive oil, sea salt'
    kanpachi.appendChild(kanpachiInfo);

    const albacore = document.createElement('div');
    albacore.setAttribute('class', 'menu-item');
    sashimi.appendChild(albacore);

    const albacoreTitle = document.createElement('div');
    albacoreTitle.setAttribute('class', 'menu-item-title');
    albacoreTitle.setAttribute('id', 'albacore-title');
    albacore.appendChild(albacoreTitle);

    const albacoreName = document.createElement('h3');
    albacoreName.setAttribute('class', 'menu-name-light');
    albacoreName.setAttribute('id', 'albacore-name');
    albacoreName.textContent = 'ALBACORE CRISPY ONION*'
    albacoreTitle.appendChild(albacoreName);

    const albacorePrice = document.createElement('h3');
    albacorePrice.setAttribute('class', 'price');
    albacorePrice.setAttribute('id', 'albacore-price');
    albacorePrice.textContent = '22'
    albacoreTitle.appendChild(albacorePrice);

    const albacoreInfo = document.createElement('span');
    albacoreInfo.setAttribute('class', 'menu-info-dark');
    albacoreInfo.setAttribute('id', 'albacore-info');
    albacoreInfo.textContent = 'Seared albacore, garlic aioli, yuzu ponzu, crispy onion, chervil'
    albacore.appendChild(albacoreInfo);

    const shiso = document.createElement('div');
    shiso.setAttribute('class', 'menu-item');
    sashimi.appendChild(shiso);

    const shisoTitle = document.createElement('div');
    shisoTitle.setAttribute('class', 'menu-item-title');
    shisoTitle.setAttribute('id', 'shiso-title');
    shiso.appendChild(shisoTitle);

    const shisoName = document.createElement('h3');
    shisoName.setAttribute('class', 'menu-name-light');
    shisoName.setAttribute('id', 'shiso-name');
    shisoName.textContent = 'SHISO PLUM SHIROMI*'
    shisoTitle.appendChild(shisoName);

    const shisoPrice = document.createElement('h3');
    shisoPrice.setAttribute('class', 'price');
    shisoPrice.setAttribute('id', 'shiso-price');
    shisoPrice.textContent = '22'
    shisoTitle.appendChild(shisoPrice);

    const shisoInfo = document.createElement('span');
    shisoInfo.setAttribute('class', 'menu-info-dark');
    shisoInfo.setAttribute('id', 'shiso-info');
    shisoInfo.textContent = 'Whitefish, yuzu ponzu, olive oil, umeboshi, shiso'
    shiso.appendChild(shisoInfo);

    const tataki = document.createElement('div');
    tataki.setAttribute('class', 'menu-item');
    sashimi.appendChild(tataki);

    const tatakiTitle = document.createElement('div');
    tatakiTitle.setAttribute('class', 'menu-item-title');
    tatakiTitle.setAttribute('id', 'tataki-title');
    tataki.appendChild(tatakiTitle);

    const tatakiName = document.createElement('h3');
    tatakiName.setAttribute('class', 'menu-name-light');
    tatakiName.setAttribute('id', 'tataki-name');
    tatakiName.textContent = 'TUNA TATAKI*'
    tatakiTitle.appendChild(tatakiName);

    const tatakiPrice = document.createElement('h3');
    tatakiPrice.setAttribute('class', 'price');
    tatakiPrice.setAttribute('id', 'tataki-price');
    tatakiPrice.textContent = '24'
    tatakiTitle.appendChild(tatakiPrice);

    const tatakiInfo = document.createElement('span');
    tatakiInfo.setAttribute('class', 'menu-info-dark');
    tatakiInfo.setAttribute('id', 'tataki-info');
    tatakiInfo.textContent = 'Sesame crusted bigeye tuna, apple mustard dressing, green onion'
    tataki.appendChild(tatakiInfo);

    const tiradito = document.createElement('div');
    tiradito.setAttribute('class', 'menu-item');
    sashimi.appendChild(tiradito);

    const tiraditoTitle = document.createElement('div');
    tiraditoTitle.setAttribute('class', 'menu-item-title');
    tiraditoTitle.setAttribute('id', 'tiradito-title');
    tiradito.appendChild(tiraditoTitle);

    const tiraditoName = document.createElement('h3');
    tiraditoName.setAttribute('class', 'menu-name-light');
    tiraditoName.setAttribute('id', 'tiradito-name');
    tiraditoName.textContent = 'WHITEFISH TIRADITO*'
    tiraditoTitle.appendChild(tiraditoName);

    const tiraditoPrice = document.createElement('h3');
    tiraditoPrice.setAttribute('class', 'price');
    tiraditoPrice.setAttribute('id', 'tiradito-price');
    tiraditoPrice.textContent = '22'
    tiraditoTitle.appendChild(tiraditoPrice);

    const tiraditoInfo = document.createElement('span');
    tiraditoInfo.setAttribute('class', 'menu-info-dark');
    tiraditoInfo.setAttribute('id', 'tiradito-info');
    tiraditoInfo.textContent = 'Aji amarillo chili tigers milk, mango, gochugaru oil, basil, sea salt'
    tiradito.appendChild(tiraditoInfo);
}