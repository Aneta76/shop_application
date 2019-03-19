package com.aneta.shop.security;

import com.aneta.shop.converter.UserConverter;
import com.aneta.shop.dto.UserDTO;
import com.aneta.shop.entity.User;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class AuthenticationSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    private final ObjectMapper objectMapper;
    private final UserConverter userConverter;

    public AuthenticationSuccessHandler(ObjectMapper objectMapper, UserConverter userConverter) {
        this.objectMapper = objectMapper;
        this.userConverter = userConverter;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
                                        Authentication authentication) throws IOException {
        clearAuthenticationAttributes(request);
        UserDTO user = userConverter.convertToDTO((User) authentication.getPrincipal());
        String loggedUser = objectMapper.writeValueAsString(user);
        response.setContentType("application/json");
        response.setStatus(HttpServletResponse.SC_OK);
        response.getWriter().write(loggedUser);
    }
}