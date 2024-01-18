import { Roboto, Red_Hat_Display } from 'next/font/google'

const redHat300 = Red_Hat_Display({ subsets: ['latin'], weight: '300' })
const redHat400 = Red_Hat_Display({ subsets: ['latin'], weight: '400' })
const redHat700 = Red_Hat_Display({ subsets: ['latin'], weight: '700' })
const roboto300 = Roboto({ subsets: ['latin'], weight: '300' })
const roboto400 = Roboto({ subsets: ['latin'], weight: '400' })


export { roboto300, roboto400, redHat300, redHat400, redHat700 }


