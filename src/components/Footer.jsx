import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #f8f9fa;
  padding: 40px 20px;
  border-top: 1px solid #e7e7e7;
  font-family: Arial, sans-serif;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 20px;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
    flex: 100%;
  }
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
  margin-top:30px;
`;

const Title = styled.h2`
  font-size: 18px;
  color: #000;
  margin-bottom: 10px;
`;


const Text = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.5;
`;

const QuickLinks = styled.div`
  font-size: 14px;
  color: #666;

  a {
    display: block;
    color: #007bff;
    text-decoration: none;
    margin: 5px 0;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const DonateButton = styled.a`
  display: inline-block;
  background-color: #e74c3c;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  margin: 10px auto;
  font-size: 16px;

  &:hover {
    background-color: #c0392b;
  }
`;

const SocialLinks = styled.div`
  font-size: 14px;
  color: #666;
  margin-top: -25px;
  text-align: right;

  a {
    color: #007bff;
    text-decoration: none;
    margin: 0 10px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SocialIcon = styled.img`
  width: 24px;
  height: 24px;
  margin: 0 10px;
`;

const BottomBar = styled.div`
  border-top: 1px solid #e7e7e7;
  padding-top: 20px;
  text-align: left;
  font-size: 14px;
  color: #666;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Logo src="ncclogo.png" alt="DBTR Logo" />
        <FooterSection>
          <Text>
            DBTR National Higher Secondary School
            <br />
            Virtuousness is Life
            <br />
            Established in 1901, DBTR is situated in the temple town of
            Mayiladuthurai.
          </Text>
        </FooterSection>
        <FooterSection>
          <Title>Quick Links</Title>
          <QuickLinks>
            <a href="#admissions">Admissions</a>
            <a href="#alumni">Alumni association</a>
            <a href="#donate">Donate</a>
            <a href="#events">Events</a>
          </QuickLinks>
        </FooterSection>
        <FooterSection>
          <Title>Contact</Title>
          <Text>
            DBTR NHSS,
            <br />
            Mahadhana Street,
            <br />
            Kamarajar Salai,
            <br />
            Mayiladuthurai,
            <br />
            Tamilnadu – 609001
            <br />
            +91.436.422.3272
            <br />
            contact@nationalhighschool.in
          </Text>
        </FooterSection>
        <FooterSection>
          <Text>Big or small, you can make an impact.</Text>
          <DonateButton href="#donate">Donate ❤</DonateButton>
        </FooterSection>
      </FooterContent>
      <BottomBar>
        <div>© DBTR 2023, All Rights Reserved | Sitemap</div>
        <div>
          Designed by{" "}
          <span style={{ fontSize:"20px"}}>
            {" "}
            PEPPER S<span style={{ color: "red" }}>Q</span>UARE
          </span>
        </div>
        <SocialLinks>
          <a href="#facebook">
            <SocialIcon src="facebooklogo.png" alt="Facebook" />
          </a>
          <a href="#twitter">
            <SocialIcon src="twitterlogo.png" alt="Twitter" />
          </a>
          <a href="#linkedin">
            <SocialIcon src="linkedinlogo.png" alt="LinkedIn" />
          </a>
          <a href="#instagram">
            <SocialIcon src="instalogo.png" alt="Instagram" />
          </a>
          <a href="#youtube">
            <SocialIcon src="youtubelogo.png" alt="YouTube" />
          </a>
        </SocialLinks>
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer;
