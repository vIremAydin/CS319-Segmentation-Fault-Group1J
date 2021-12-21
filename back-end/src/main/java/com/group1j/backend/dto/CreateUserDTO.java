package com.group1j.backend.dto;


public class CreateUserDTO {
    //Fields
    private int userID;
    private String name;
    private String email;
    private String password;
    private String hesCode;

    public CreateUserDTO(int userID, String name, String email, String password, String hesCode) {
        this.userID = userID;
        this.name = name;
        this.email = email;
        this.password = password;
        this.hesCode = hesCode;
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public String getHesCode() {
        return hesCode;
    }

    public void setHesCode(String hesCode) {
        this.hesCode = hesCode;
    }
}
