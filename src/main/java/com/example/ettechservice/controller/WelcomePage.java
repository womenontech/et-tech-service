package com.example.ettechservice.controller;


import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/welcome")
public class WelcomePage {

   @PostMapping("/clients")
   public String[] hello(){
        String[] clients = {"Shaye", "Bae"};
       return clients;
    }
}
