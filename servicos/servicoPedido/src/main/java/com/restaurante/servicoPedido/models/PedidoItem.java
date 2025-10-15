package com.restaurante.servicoPedido.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Entity
@Table(name = "PEDIDO_ITEM")
@AllArgsConstructor
@NoArgsConstructor
public class PedidoItem {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Getter
    @Setter
    private UUID id;

    @Getter
    @Setter
    private UUID item;

    @Getter
    @Setter
    private Double quantidade;

    @Getter
    @Setter
    @ManyToOne
    private Pedido idPedido;
}
