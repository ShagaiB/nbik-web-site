import Link from 'next/link'
import { useRouter } from 'next/router'


export default function LocaleSwitcher() {
  const router = useRouter()
  const { locales, locale: activeLocale } = router
  const otherLocales = locales.filter((locale) => locale !== activeLocale)

  return (
    <div>
      <ul>
        {otherLocales.map((locale) => {
          const { pathname, query, asPath } = router
          return (
            <li key={locale}>
              <Link href={{ pathname, query }} as={asPath} locale={locale}>
                <a><img src={'/' + locale + '.png'} width='20' height='20' alt={locale} key={locale} /></a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
