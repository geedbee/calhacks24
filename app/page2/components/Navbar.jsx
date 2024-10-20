import React from "react";

const Navbar = () => {
    return (
        <Section>
            <Container>
                <Links>
                    {/* <Logo src=""/> */}
                    <List>
                        <ListItem>ABOUT</ListItem>
                        <ListItem>PROJECT</ListItem>
                        <ListItem>CONTACT</ListItem>
                    </List>
                </Links>
                {/* <Icons>
                    <Icon src="https://cdn-icons-png.flaticon.com/512/733/733547.png"/>
                    <Button>Click Me</Button>
                </Icons> */}
            </Container>
        </Section>
    );
};

export default Navbar;