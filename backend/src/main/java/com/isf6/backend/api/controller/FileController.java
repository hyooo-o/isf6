package com.isf6.backend.api.controller;

import com.isf6.backend.domain.entity.User;
import com.isf6.backend.service.FileService;
import com.isf6.backend.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/file")
public class FileController {
    @Autowired
    FileService fileService;

    @Autowired
    UserService userService;

    @PatchMapping("/upload/{UserCode}")
    public ResponseEntity updateProfileImage(@RequestBody MultipartFile userPhoto, @PathVariable Long userCode) {
        //유저 정보 찾기
        User user = userService.findUser(userCode);

        // 이미지 엔코딩해서 사진 저장하기
        Base64.Encoder encoder = Base64

        userService.updateUserPhoto(user, photoImg);


    }

}
