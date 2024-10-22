package com.restaurante.gateway.routes;

import com.restaurante.gateway.router.Router;
import org.springframework.cloud.gateway.route.Route;
import org.springframework.cloud.gateway.route.builder.Buildable;
import org.springframework.cloud.gateway.route.builder.PredicateSpec;

import java.util.function.Function;

public class RotasCozinha implements Router {

    @Override
    public Function<PredicateSpec, Buildable<Route>> route() {

        return null;
    }
}
