package com.restaurante.servicoCatalogo.repositories;

import com.restaurante.servicoCatalogo.models.CatalogoModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface CatalogoRepository extends JpaRepository<CatalogoModel, UUID>{

}
