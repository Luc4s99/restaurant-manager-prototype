package com.restaurante.servicoCatalogo.repositories;

import com.restaurante.servicoCatalogo.models.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface CatalogoRepository extends JpaRepository<Produto, UUID>{

}
