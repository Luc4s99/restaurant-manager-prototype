package com.restaurante.servicoPedido.repositories;

import com.restaurante.servicoPedido.models.PedidoItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface PedidoItemRepository extends JpaRepository<PedidoItem, UUID> {
}
