package com.restaurante.servicoCozinha.services;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class CozinhaListener {

    @KafkaListener(topics = "cozinha-tpc", groupId = "cozinha-group")
    public void receberPedido(String mensagem) {

        System.out.println(mensagem);
    }
}
