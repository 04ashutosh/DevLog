package com.devlog.api.service;

import com.devlog.api.domain.LogEntry;
import com.devlog.api.repository.LogEntryRepository;
import lombok.RequiredArgsConstructor;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVPrinter;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.StringWriter;

@Service @RequiredArgsConstructor
public class ExportService {
    private final LogEntryRepository logEntryRepository;

    public String exportToCsv() throws IOException {
        StringWriter writer = new StringWriter();
        CSVPrinter printer = new CSVPrinter(writer, CSVFormat.DEFAULT.withHeader("Date","Summary","Project","Task","Duration(m)"));

        for (LogEntry log : logEntryRepository.findAll()) {
            for (var item : log.getWorkItems()){
                printer.printRecord(log.getLogDate(),log.getSummary(),item.getProject().getName(),item.getTitle(),item.getDurationMinutes());
            }
        }

        return writer.toString();
    }
}
