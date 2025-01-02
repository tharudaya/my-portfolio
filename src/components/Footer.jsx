import { SOCIAL_MEDIA_LINKS } from '../constants';

const Footer = () => {
    return (
        <div className="mb-8 mt-20">
            <div className="flex items-center justify-center gap-8">
                {SOCIAL_MEDIA_LINKS.map((link, index) => (
                    <a key={index} href={link.href} rel="noopener noreferrer" target="_blank">
                        {link.icon}
                    </a>
                ))}
            </div>
            <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
                &copy;Tharaka Udayanga. All rights reserved.
            </p>
        </div>
    )
}

export default Footer