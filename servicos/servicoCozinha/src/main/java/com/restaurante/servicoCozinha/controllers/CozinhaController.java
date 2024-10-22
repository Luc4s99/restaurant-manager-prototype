package com.restaurante.servicoCozinha.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("cozinha")
public class CozinhaController {

    @GetMapping
    public String getCozinha() {

        return "Bem vindo a Cozinha!";
    }
}
