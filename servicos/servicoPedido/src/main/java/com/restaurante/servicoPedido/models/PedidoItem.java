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
    @Column(name = "ID_PEDIDO_ITEM")
    private UUID idPedidoItem;

    @Getter
    @Setter
    @Column(name = "ID_PRODUTO")
    private String idProduto;

    @Getter
    @Setter
    @Column(name = "QUANTIDADE")
    private Double quantidade;

    @Getter
    @Setter
    @JoinColumn(name = "ID_PEDIDO")
    @ManyToOne
    private Pedido idPedido;
}
