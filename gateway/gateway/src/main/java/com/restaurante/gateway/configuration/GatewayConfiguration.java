package com.restaurante.gateway.configuration;

import com.restaurante.gateway.routes.RotasCatalogo;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.cloud.gateway.route.RouteLocator;

@Configuration
public class GatewayConfiguration {

    private final RotasCatalogo rotasCatalogo = new RotasCatalogo();

    @Bean
    public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {

        return builder.routes()
                .route("rotaCozinha", r -> r.path("/cozinha")
                    .uri("http://localhost:8081/"))
                .route("rotaPedido", r -> r.path("/pedido")
                        .uri("http://localhost:8082/"))
                .route("rotaCatalogo", rotasCatalogo.route())
                .build();
    }
}
