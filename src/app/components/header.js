import Image from "next/image";

export default function Header() {
    return (
        <div className="navbar navbar-sticky py-5">
            <div className="container mx-auto flex align-center">
                <div className="navbar-start sm:w-100 w-52">
                    <a className="navbar-item" href="/"><Image src="/assets/logo.png" alt="Logo" width="50" height="43" /></a>
                </div>
                <div className="navbar-end">
                    <a className="navbar-item" href="https://x.com/friendsmanager1?s=21" target="_blank"><span className="hidden sm:block">Twitter</span><Image src="/assets/twitter.svg" alt="Logo" width="25" height="25" className="sm:hidden block" /></a>
                    <a className="navbar-item" href="https://t.me/friendmanager1"><span className="hidden sm:block">Telegram</span><Image src="/assets/telegram.svg" alt="Logo" width="25" height="25" className="sm:hidden block" /></a>
                    <button className="btn btn-rounded text-white launch-btn">LAUNCH APP</button>
                </div>
            </div>
        </div>
    )
}