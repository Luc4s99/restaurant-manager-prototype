package com.restaurante.servicoCatalogo.records;

import jakarta.annotation.Nonnull;

import java.util.UUID;

public record CatalogoRecord(@Nonnull UUID id, String descricao, Double preco) {
}
