package com.restaurante.servicoPedido.controllers;

import com.restaurante.servicoPedido.Enum.Status;
import com.restaurante.servicoPedido.models.Pedido;
import com.restaurante.servicoPedido.repositories.PedidoRepository;
import com.restaurante.servicoPedido.services.PedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.*;

@RestController
public class PedidoController {

    private final PedidoService pedidoService;

    public PedidoController(PedidoService pedidoService) {

        this.pedidoService = pedidoService;
    }

    @Autowired
    private KafkaTemplate<String, String> kafkaTemplate;

    /*@RequestMapping("/pedido")
    @GetMapping
    public ResponseEntity<Void> getPedido() {

        kafkaTemplate.send("cozinha-tpc", "PEDIDO RECEBIDO");
        return ResponseEntity.ok().build();
    }*/

    @RequestMapping("/pedido")
    @PostMapping
    public ResponseEntity<Pedido> salvarPedido(@RequestBody Pedido pedido) {

        //Informa a cozinha que um novo pedido foi feito
        kafkaTemplate.send("cozinha-tpc", "PEDIDO REALIZADO");
        System.out.println(pedido);

        pedido.setStatus(Status.AGUARDANDO_COZINHA.getDescricao());

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(pedidoService.salvar(pedido));
    }
}
