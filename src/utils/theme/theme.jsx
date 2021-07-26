const fontSize = {
    //desktop
    DA: '12px',
    DB: '29px',
    DC: '65px',
    DCC: '60px',
    DCCC: '48px',
    //mobile
    MA: '17px',
    MB: '29px',
    MC: '55px',
}
const colors = {
    black: '#000',
    white: '#fff',
}
const size = {
    mobileS: '350px',
    mobileM: '375px',
    mobileMscalePlus: '450px',
    mobileMscale: '575px',
    mobileL: '767px',
    tablet: '991px',
    laptop: '1279px',
    laptopL: '1535px',
    desktop: '2560px',
    browserviewportheight: '1100px',
    lowScreenVerticalHeight: '745px',
    lowScreenVerticalHeightPlus: '670px',
    lowScreenVerticalHeightSuperPlus: '495px',
    lowScreenVerticalHeightSuperPlusEnd: '355px',
}
export const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileMscalePlus: `(max-width: ${size.mobileMscalePlus})`,
    mobileMscale: `(max-width: ${size.mobileMscale})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktopL})`,
    browserzoom: `(min-height: ${size.browserviewportheight})`,
    VerticalHeight: `(max-height: ${size.lowScreenVerticalHeight})`,
    VerticalHeightPlus: `(max-height: ${size.lowScreenVerticalHeightPlus})`,
    VerticalHeightSuperPlus: `(max-height: ${size.lowScreenVerticalHeightSuperPlus})`,
    VerticalHeightSuperPlusEnd: `(max-height: ${size.lowScreenVerticalHeightSuperPlusEnd})`,
};

export const theme = {
    fontSize,
    colors,
    device,
}