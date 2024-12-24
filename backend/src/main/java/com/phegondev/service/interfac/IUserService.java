package com.phegondev.service.interfac;


import com.phegondev.dto.LoginRequest;
import com.phegondev.dto.Response;
import com.phegondev.entity.User;
import lombok.Data;




public interface IUserService {
    Response register(User user);

    Response login(LoginRequest loginRequest);

    Response getAllUsers();

    Response getUserBookingHistory(String userId);

    Response deleteUser(String userId);

    Response getUserById(String userId);

    Response getMyInfo(String email);

}

