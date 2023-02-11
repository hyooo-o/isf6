package com.isf6.backend.config.jwt;

import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
@Component
public class CustomAuthenticationEntryPoint implements AuthenticationEntryPoint {

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {
        String exception = (String) request.getAttribute(JwtProperties.HEADER_STRING);
        String errorCode;

        log.info("exception : {}", exception);

        if(exception == null) {
            errorCode = "NON_LOGIN_USER";
            setResponse(response, errorCode);
            return;
        }

        if(exception.equals("토큰이 만료되었습니다.")) {
            errorCode = "EXPIRED_TOKEN";
            setResponse (response, errorCode);
            return;
        }

        if(exception.equals("유효하지 않은 토큰입니다.")) {
            errorCode = "INVALID_TOKEN";
            setResponse(response, errorCode);
            return;
        }
    }

    private void setResponse(HttpServletResponse response, String errorCode) throws IOException {
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        response.setContentType("application/json;charset=UTF-8");
        response.getWriter().println(JwtProperties.HEADER_STRING + " : " + errorCode);
    }

}
