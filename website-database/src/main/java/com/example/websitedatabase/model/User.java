package com.example.websitedatabase.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name = "users")
public class User {

    @Id
    @Column(name = "user_name")
    private String userName;


    @Column(name = "full_name")
    private String fullName;


    @Column(name = "email")
    private String email;


    @Column(name = "password")
    private String password;

    @Column(name = "picture_url")
    private String pictureUrl;


    public User() {
        super();
    }

    public User(String userName, String fullName, String email, String password, String pictureUrl) {
        super();
        this.userName = userName;
        this.fullName = fullName;
        this.email = email;
        this.password = password;
        this.pictureUrl = pictureUrl;
    }


    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    public String getPictureUrl() {
        return pictureUrl;
    }

    public void setPictureUrl(String pictureUrl) {
        this.pictureUrl = pictureUrl;
    }
}

