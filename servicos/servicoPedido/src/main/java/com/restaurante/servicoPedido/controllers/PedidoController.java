package com.restaurante.servicoPedido.controllers;

import com.restaurante.servicoPedido.Enum.Status;
import com.restaurante.servicoPedido.models.Pedido;
import com.restaurante.servicoPedido.models.PedidoItem;
import com.restaurante.servicoPedido.services.PedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
public class PedidoController {

    private final PedidoService pedidoService;

    public PedidoController(PedidoService pedidoService) {

        this.pedidoService = pedidoService;
    }

    @Autowired
    private KafkaTemplate<String, String> kafkaTemplate;

    @RequestMapping("/pedido")
    @GetMapping
    public ResponseEntity<List<Pedido>> getPedidos() {

        return ResponseEntity.status(HttpStatus.OK).body(pedidoService.listarTodos());
    }

    @RequestMapping("/pedido/{id}")
    @GetMapping
    public ResponseEntity<Optional<Pedido>> getPedido(@PathVariable String id) {

        return ResponseEntity.status(HttpStatus.OK)
                .body(pedidoService.listarPorId(id));
    }

    @RequestMapping("/pedido/novo")
    @PostMapping
    public ResponseEntity<Pedido> salvarPedido(@RequestBody List<PedidoItem> itensPedido) {

        //Informa a cozinha que um novo pedido foi feito
        kafkaTemplate.send("cozinha-tpc", "PEDIDO REALIZADO");

        //Primeiro é criado o pedido
        Pedido pedido = new Pedido();

        pedido.setDataPedido(new Date());
        pedido.setStatusPedido(Status.AGUARDANDO_COZINHA.getDescricao());

        //Cria o pedido, e pega o pedido, já com o id no retorno
        Pedido pedidoCriado = pedidoService.salvar(pedido);

        //Seta o id do pedido nos itens
        for(PedidoItem item : itensPedido) {

            item.setIdPedido(pedidoCriado);
        }

        //Salva os itens do pedido
        pedidoService.salvarItensPedido(itensPedido);

        return ResponseEntity.status(HttpStatus.CREATED).body(pedido);
    }
}
