package com.restaurante.servicoPedido.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("pedido")
public class PedidoController {

    @GetMapping
    public String getPedido() {

        return "Bem vindo aos pedidos!";
    }
}
