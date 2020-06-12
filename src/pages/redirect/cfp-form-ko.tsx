import useRedirect from '../../hooks/useRedirect'
import { OUT_LINKS } from '../../utils/constants'

const CFP_FORM_KO = () => {
  useRedirect(OUT_LINKS.CFP_FORM.KO)
  return <></>
}

export default CFP_FORM_KO
