/* eslint-disable eol-last */
// Data
import { CATEGORIES } from '../../../Utilis/globalConstants'

// Componentes
import CartWidget from '../../cart/CartWidget/CartWidget'
import SocialButtons from '../../layout/SocialButtons/SocielaButtons'
import CategoriesMenu from '../../store/CategoriesMenu/CategoriesMenu'
import Greeting from '../Greeting'
import SiteLogo from '../SiteLogo'
import TopBanner from '../TopBanner'

function Header () {
  const styles = `flex-col bg-transparent navbar gap-2
                  sm:flex-row sm:justify-between`

  return (
    <>
      <TopBanner />
      <div className={styles}>
        <SiteLogo />
        <Greeting />
        <SocialButtons />
        {/* Menu */}
        <div className='justify-between flex-1 px-8 sm:mt-2'>
          <CategoriesMenu menuItems={CATEGORIES} />
          <CartWidget
            className={`fixed z-50 bg-brand text-background rounded-full shadow-lg bottom-4 right-4
                        sm:static sm:rounded-none sm:shadow-none sm:bottom-0 sm:right-0 sm:bg-background sm:text-foreground`}
          />
        </div>
      </div>

    </>
  )
}

export default Header