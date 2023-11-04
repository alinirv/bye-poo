import pageHeaderStyle from './PageHeader.module.css'

function PageHeader({ title }) {
    return (
        <header className={ pageHeaderStyle.Header }>
            <h3>{ title }</h3>
        </header>
    )
}

export default PageHeader
