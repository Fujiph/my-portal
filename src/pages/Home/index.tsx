import AppButton from "../../components/Button/AppButton";
import { Container, Profile, BtnContainer, Icon, IconContainer } from "./style";
import links from "../../data/links.json"
import data from "../../data/data.json"
import { GitHub, Linkedin, Mail, Youtube } from 'react-feather';


export default function Home() {

    const render_links = 
        links.map((props, key) => {
            return (
                <AppButton key={key} label={props.label} onButtonClick={() => onLinkClick(props.link)} />
            )
        } 
    )

    const onLinkClick = (link: string) => {
        // window.location.href = link;
        window.open(link, "_blank");
    }

    return (
        <Container>
            <Profile>
                <img src="/assets/profile.png" alt="my profile" />
                <h3>{data.name}</h3>
            </Profile>
            <BtnContainer>
                {render_links}
            </BtnContainer>
            <IconContainer>
                <Icon onClick={() => onLinkClick(data.linkedIn)}>
                    <Linkedin color='#F4AC3E' stroke-width="1.2" size={32} />
                </Icon>
                <Icon onClick={() => onLinkClick(data.gitHub)}>
                    <GitHub color='#F4AC3E' stroke-width="1.2" size={32} />
                </Icon>
                <Icon>
                    <a href={`mailto: ${data.email}`}>
                        <Mail color='#F4AC3E' stroke-width="1.2" size={32} />
                    </a>
                </Icon>
                <Icon onClick={() => onLinkClick(data.youtube)}>
                    <Youtube color='#F4AC3E' stroke-width="1.2" size={32} />
                </Icon>
            </IconContainer>
        </Container>
    )
}