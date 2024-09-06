import React from "react";
import {
  StyledHeader,
  StyledLeftHeader,
  StyledNotificationIconContainer,
  StyledRightHeader,
  StyledRightUser,
  StyledSearchContainer,
  StyledSearchIconContainer,
  StyledSearchPlaceholder,
  StyledUserImage,
} from "./header.styled";
import { STRINGS, URL } from "../../constants";
import Button from "../button";
import ProductIcon from "../../assets/header/product.svg";
import SupportIcon from "../../assets/header/support.svg";
import DownArrow from "../../assets/header/arrow.svg";
import NotificationIcon from "../../assets/header/nofication.svg";
import SearchIcon from "../../assets/header/search.svg";

const Header = () => {
  return (
    <StyledHeader>
      <StyledLeftHeader>{STRINGS.HEADER_HEADING}</StyledLeftHeader>
      <StyledRightHeader>
        <Button label={STRINGS.SUPPORT_BTN_TEXT} icon={SupportIcon} />
        <Button label={STRINGS.PRODUCT_BTN_TEXT} icon={ProductIcon} />
        <StyledNotificationIconContainer>
          <img src={NotificationIcon} />
        </StyledNotificationIconContainer>
        <StyledSearchContainer>
          <StyledSearchPlaceholder>
            {STRINGS.SEARCH_PLACEHOLDER}
          </StyledSearchPlaceholder>
          <StyledSearchIconContainer>
            <img src={SearchIcon} />
          </StyledSearchIconContainer>
        </StyledSearchContainer>
        <StyledRightUser>
          <StyledUserImage src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/f8239007-7d36-45ce-a0a1-fdf91052b10e/299f5e14-73c4-4a9b-99c9-e44adbc218cf.png" />
          <span>{STRINGS.HEADER_USERNAME}</span>
          <img src={DownArrow} />
        </StyledRightUser>
      </StyledRightHeader>
    </StyledHeader>
  );
};

export default Header;
