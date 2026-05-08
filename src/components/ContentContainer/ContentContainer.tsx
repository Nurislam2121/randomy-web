import './ContentContainer.css'
import {type FC, type ReactNode} from 'react'

interface ContentContainerProps {
    children: ReactNode,
    title? :string,
    className?: string
}

const ContentContainer: FC<ContentContainerProps> = ({children, title, className}) => {
    return (
        <section className={`universal-card ${className ? className : ''}`}>
            {title && <h2 className="card-title">{title}</h2>}
            <div className="card-content">
                {children}
            </div>
        </section>
    )
}

export default ContentContainer