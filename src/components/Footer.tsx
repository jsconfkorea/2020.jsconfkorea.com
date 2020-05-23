/** @jsx jsx */
import { jsx, css } from '@emotion/core'

type Props = {
    toGreen?: boolean
}

const Footer = ({ toGreen }: Props) => {
    return (
        <div css={style} className={toGreen ? 'green' : ''}>
            this is Footer
        </div>
    )
}

const style = css`
    font-size: 4rem;
    .green {
        color: green;
    }
`

export default Footer
