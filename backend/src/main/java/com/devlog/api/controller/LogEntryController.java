package com.devlog.api.controller;

import com.devlog.api.domain.LogEntry;
import com.devlog.api.dto.LogEntryRequest;
import com.devlog.api.service.LogEntryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController @RequestMapping("/api/logs")
@RequiredArgsConstructor @CrossOrigin("*")
public class LogEntryController {
    private final LogEntryService logEntryService;

    @PostMapping
    public ResponseEntity<LogEntry> create(@RequestBody LogEntryRequest request){
        return ResponseEntity.ok(logEntryService.createLogEntry(request));
    }

    @GetMapping
    public ResponseEntity<List<LogEntry>> getAll(){
        return ResponseEntity.ok(logEntryService.getAllLogs());
    }
}
