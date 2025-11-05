package com.restaurante.servicoPedido.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.UUID;

@Entity
@Table(name = "PEDIDO")
@AllArgsConstructor
@NoArgsConstructor
public class Pedido {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Getter
    @Setter
    @Column(name = "ID_PEDIDO")
    private UUID idPedido;

    @Getter @Setter
    @Column(name = "DATA_PEDIDO")
    private Date dataPedido;

    @Getter @Setter
    @Column(name = "STATUS_PEDIDO")
    private String statusPedido;
}
