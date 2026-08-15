package com.example.ecom.auth.entity;

public enum Role {
    ADMIN,
    USER,
    GUEST
}

//Using an enum is better than storing arbitrary strings because you don't want values such as:
//admin
//Admin
//administrator
//ADMINISTRATOR