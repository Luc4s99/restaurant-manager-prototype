package com.restaurante.servicoPedido.repositories;

import com.restaurante.servicoPedido.models.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface PedidoRepository extends JpaRepository<Pedido, UUID> {
}
