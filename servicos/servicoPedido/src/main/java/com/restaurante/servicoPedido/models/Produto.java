package com.restaurante.servicoPedido.models;

import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

public class Produto {

    @Getter
    @Setter
    private UUID id;

    @Getter @Setter
    private String descricao;

    @Getter @Setter
    private Double preco;
}
