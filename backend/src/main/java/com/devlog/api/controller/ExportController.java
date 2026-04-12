package com.devlog.api.controller;

import com.devlog.api.service.ExportService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController @RequestMapping("/api/export")
@RequiredArgsConstructor @CrossOrigin("*")
public class ExportController {
    private final ExportService exportService;

    @GetMapping("/csv")
    public ResponseEntity<String> downloadCsv(){
        try{
            String csv = exportService.exportToCsv();
            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment;filename=devlog_export.csv")
                    .contentType(MediaType.parseMediaType("text/csv"))
                    .body(csv);
        }catch (Exception e){
            return ResponseEntity.status(500).build();
        }
    }
}
