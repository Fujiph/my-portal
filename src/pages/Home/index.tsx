import AppButton from "../../components/Button/AppButton";
import { Container, Profile } from "./style";
import links from "../../data/links.json"
import data from "../../data/data.json"

export default function Home() {

    const render_links = 
        links.map((props, key) => {
            return (
                <AppButton key={key} label={props.label} onButtonClick={() => onButtonLinkClick(props.link)} />
            )
        } 
    )

    const onButtonLinkClick = (link: string) => {
        window.location.href = link;
        // console.log("Clicked")
    }

    return (
        <Container>
            <Profile>
                <img src="/assets/profile.png" alt="my profile" />
                <h3>{data.name}</h3>
            </Profile>
            {render_links}
        </Container>
    )
}