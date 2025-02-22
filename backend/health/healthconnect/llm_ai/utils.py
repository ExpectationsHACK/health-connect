from openai import OpenAI
import openai
from django.conf import settings

openai.api_key = settings.OPENAI_API_KEY
client = OpenAI()
from pydantic import BaseModel

class MedicalTips(BaseModel):
    daily_health_tip: str
    hydration_tip: str
    mental_health_tip:str
    sleep_tip:str
    stress_management_tip:str
    immune_boosting_tip:str
    healthy_lifestyle_habit:str
    food_and_nutrution:str
    


def generate_result_for_patient_diagnosis(diagnosis_result):
        print("diagnosis_result",diagnosis_result.symptoms)
       
        PatientPrompt = f"""
        you are a medical professional assistant.
        
        you will be given an ill patient details your task is to generate medical tips for the patient.
        
        here are the example medical tip to generate for the patient
        1. Daily Health Tip
        2. Hydration Tip
        3. Mental Health Tip
        4. Sleep Tip
        5. Stress Management Tip
        6. Immune Boosting Tip
        7. Healthy Lifestyle Habit
        8. Food and nutrution
        
        Use the following step-by-step instructions to generate medical tip for the patient
        
        1. Analyze the patient details and Identify key aspect such as Age,gender,symptoms, medical_history,allergies,current_medication and
        test_result_text
        
        2. use the Analyze patient result you have to generate medical tips
        
        3. Strickly use the patient result provided to you
        
        4. Strickly return professional medical tip tailor to the patient details

        """

        response = client.beta.chat.completions.parse(
        model="gpt-4o-2024-08-06",
        messages=[
            {
            "role": "system",
            "content": PatientPrompt
            },
            {
            "role": "user",
            "content": f"""
            here is diagnosis result of the patient :\n 
            Age: {diagnosis_result.age}\n
            gender: {diagnosis_result.gender}\n
            Symptoms: {diagnosis_result.symptoms}\n
            Medical History: {diagnosis_result.medical_history}\n
            Allergies:{diagnosis_result.allergies}\n
            Current medication: {diagnosis_result.current_medication}\n
            Test result: {diagnosis_result.test_result_text}\n
            """
            }
        ],
        timeout=360,
        response_format=MedicalTips,
        )

        return response.choices[0].message.parsed