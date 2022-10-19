package ie.atu.week5;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CounterTest {
    Counter myCount;
    @BeforeEach
    void setUp() {
        myCount = new Counter();
    }

    @Test
    void testIncrement(){
       assertEquals(1, myCount.increment());
    }

    @Test
    void testConstructor(){
      Exception exMessage =  assertThrows(IllegalArgumentException.class, () -> { new Counter(4);});
      assertEquals("This is not a valid number", exMessage.getMessage());
    }
    @AfterEach
    void tearDown() {
    }
}