package com.restaurante.gateway.router;

import org.springframework.cloud.gateway.route.Route;
import org.springframework.cloud.gateway.route.builder.Buildable;
import org.springframework.cloud.gateway.route.builder.PredicateSpec;

import java.util.function.Function;

public interface Router {

    Function<PredicateSpec, Buildable<Route>> route();
}
