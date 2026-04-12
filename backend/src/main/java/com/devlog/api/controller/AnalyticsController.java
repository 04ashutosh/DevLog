package com.devlog.api.controller;

import com.devlog.api.service.AnalyticsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController @RequestMapping("/api/analytics")
@RequiredArgsConstructor @CrossOrigin("*")
public class AnalyticsController {
    private final AnalyticsService analyticsService;

    @GetMapping
    public ResponseEntity<Map<String,Integer>> getStats(){
        return ResponseEntity.ok(analyticsService.getProjectStats());
    }
}
