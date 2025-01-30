package com.restaurante.servicoPedido.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PedidoController {

    @Autowired
    private KafkaTemplate<String, String> kafkaTemplate;

    @RequestMapping("/pedido")
    @GetMapping
    public ResponseEntity<Void> getPedido() {

        kafkaTemplate.send("cozinha-tpc", "PEDIDO RECEBIDO");
        return ResponseEntity.ok().build();
    }
}
